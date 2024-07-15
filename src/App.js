import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { lazy, Suspense } from 'react';




const SideBar = lazy(() => import("./Components/SideBar/index2"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route> 
       

    
        {/* <Route path="/userprofile" element={<UserProfile/>} /> */}
        
       
    
      
           {/* <Route
          path="/contact"
          element={
            <>
            <Suspense fallback={<div>Loading...</div>}>
              <SideBar>
               
               <ContactForm/>
              </SideBar>
              </Suspense>
            </>
          }
        ></Route> */}
         <Route
          path="/orders"
          element={
            <>
            <Suspense fallback={<div>Loading...</div>}>
              <SideBar>
                
              </SideBar>
              </Suspense>
            </>
          }
        ></Route>
      </Route>
  
    </>
  )
);

export default router;
