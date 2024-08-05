import { GetServerSideProps } from "next";
import { useSearchParams } from "next/navigation";
import { Router } from "next/router";
import { ReactNode, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BooksList from "../components/booksList/BooksList";
import Loader from "../components/loader/Loader";
import SearchBar from "../components/searchBar/SearchBar";
import { LocalStorageKeysEnum } from "../enums";
import { IResponse } from "../interfaces";
import { currentPageItems } from "../store/current-page/currentPageSlice";
import styles from "../styles/Home.module.css";
import { ThemeContext } from "../ThemeContext";
import useLocalStorage from "../utils/useLocalStorage";

interface HomeProps {
  children?: ReactNode;
  dataFromServer?: IResponse;
}

export const getServerSideProps = (async ({ query }) => {
  let res, dataFromServer;
  if (query?.searchTerm) {
    res = await fetch(
      `https://stapi.co/api/v2/rest/book/search?pageNumber=${query?.page || 0}&pageSize=10`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `title=${query.searchTerm}`,
      },
    );
    dataFromServer = await res.json();
  } else {
    res = await fetch(
      `https://stapi.co/api/v2/rest/book/search?pageNumber=${query?.page || 0}&pageSize=10`,
    );
    dataFromServer = await res.json();
  }
  return { props: { dataFromServer } };
}) satisfies GetServerSideProps<{ dataFromServer: IResponse }>;

const Home: React.FC<HomeProps> = ({ children, dataFromServer }) => {
  const [theme, setTheme] = useState("light");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const start = () => {
      setLoading(true);
    };
    const end = () => {
      setLoading(false);
    };
    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);
    return () => {
      Router.events.off("routeChangeStart", start);
      Router.events.off("routeChangeComplete", end);
      Router.events.off("routeChangeError", end);
    };
  }, []);
  const searchParams = useSearchParams();
  const page = Number(searchParams.get("page")) || 0;

  const [searchTerm, setSearchTerm] = useLocalStorage(
    LocalStorageKeysEnum.searchTerm,
  ) as [string, React.Dispatch<React.SetStateAction<string>>];

  const saveSearchTerm = (searchTerm: string) => {
    setSearchTerm(searchTerm);
    const currentParams = new URLSearchParams(
      Array.from(searchParams.entries()),
    );
    currentParams.set("page", "0");
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (dataFromServer?.books) {
      dispatch(currentPageItems(dataFromServer.books));
    }
  }, [dataFromServer, dispatch]);

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={theme}>
      <main
        className={theme === "light" ? styles.main_light : styles.main_dark}
      >
        <button className={styles.change_theme_btn} onClick={changeTheme}>
          Change theme
        </button>
        <h1>Book Library</h1>
        <SearchBar searchTerm={searchTerm} setSearchTerm={saveSearchTerm} />
        <div className={styles.main_block_wrapper}>
          <div className={styles.book_list_wrapper}>
            {isLoading && <Loader />}
            {!isLoading && dataFromServer && (
              <BooksList
                totalPages={dataFromServer?.page?.totalPages || 0}
                currentPage={page}
                searchTerm={searchTerm}
              />
            )}
          </div>
          {children}
        </div>
      </main>
    </ThemeContext.Provider>
  );
};

export default Home;
