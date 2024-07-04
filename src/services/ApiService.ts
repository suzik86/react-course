import { ResponseInterface } from "../interfaces";

export class ApiService {
    
    async getBooks(searchTerm: string) {
        try {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded'                   
                },
                body: JSON.stringify({title: searchTerm})
            };
            const response = await fetch('https://stapi.co/api/v2/rest/book/search', config);
            const json = await response.json() as ResponseInterface;
            if (response.ok) {
                return json.books; 
            } 
        } catch (error) {
            console.log(error)
        }  
        return [];           
    }    
}

export const apiService = new ApiService();