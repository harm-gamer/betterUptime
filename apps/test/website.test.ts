import { describe,expect,it } from "bun:test";

import axios from "axios";
describe("Website get created ",() =>{
    it("Website not created if url is not present", async () =>{
        try{
            await axios.post("http://localhost:5000/website",  {

            });
            expect(false,"Website created when it should not")
        }catch(e){

        }

      

    })
      it("Website created if url is present", async () =>{
            
                const response = await axios.post("http://localhost:5000/website", {
                    url: "https://google.com"
                });
                expect(response.data.id).not.toBeNull();
           
        })
})