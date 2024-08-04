// Disable rule react-refresh/only-export-components
/* eslint-disable react-refresh/only-export-components */

import { useRouter } from "next/router";
import React, { FC } from "react";
import Home from "..";
import BookDetails from "../../components/bookDetails/BookDetails";
import { IBookDetails, IResponse } from "../../interfaces";
import { GetServerSideProps } from "next";

type PageWithDetailsProps = {
  dataFromServer: IResponse;
  dataByIdFromServer: IBookDetails;
};

export const getServerSideProps = (async ({ query }) => {
  let res, dataFromServer;
  if (query?.searchTerm) {
    console.log("query.searchTerm", query.searchTerm);
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

  const res2 = await fetch(
    `https://stapi.co/api/v2/rest/book?uid=${query.bookId}`,
  );
  const dataByIdFromServer: IBookDetails = await res2.json();

  return { props: { dataFromServer, dataByIdFromServer } };
}) satisfies GetServerSideProps<{
  dataFromServer: IResponse;
  dataByIdFromServer: IBookDetails;
}>;

const PageWithDetails: FC<PageWithDetailsProps> = ({
  dataFromServer,
  dataByIdFromServer,
}) => {
  const router = useRouter();
  const { bookId } = router.query;

  return (
    <Home dataFromServer={dataFromServer}>
      {bookId && <BookDetails dataByIdFromServer={dataByIdFromServer} />}
    </Home>
  );
};

export default PageWithDetails;
