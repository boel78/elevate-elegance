import React, { useContext, useEffect} from "react";
import { Layout } from "../../components/layout";
import { MenuContext } from "../../src/menuContext";

export const AccountSettings = () => {

  const {noMenus} = useContext(MenuContext)

  useEffect(() => {
    noMenus()
  },[])



  return (
    <Layout>
        <div className="pt-14">
          <p>breadcrumbs</p>
          <div className="flex flex-col items-center gap-20">
            <div className="bg-lightTan w-1/2 px-6 pb-6 flex flex-col self-center">
              <div className="flex justify-between">
                <h2 className="font-medium text-xl">My Details</h2>
                <a>Edit</a>
              </div>
              <div className="flex flex-col gap-4 self-center">
                  <div className="flex gap-16">
                      <div>
                        <h3>Email</h3>
                        <input type="email" />
                      </div>
                      <div>
                        <h3>Gender</h3>
                        <input type="text" />
                      </div>
                  </div>
                  <div className="flex gap-16">
                      <div>
                        <h3>First name</h3>
                        <input type="text" />
                      </div>
                      <div>
                        <h3>ZIP CODE</h3>
                        <input type="text" />
                      </div>
                  </div>
                  <div className="flex gap-16">
                      <div>
                        <h3>Last name</h3>
                        <input type="text" />
                      </div>
                  </div>
                  <div className="flex gap-16">
                      <div>
                        <h3>Date of birth</h3>
                        <input type="text" />
                      </div>
                      <div>
                        <h3>Phone number</h3>
                        <input type="text" />
                      </div>
                  </div>
              </div>
            </div>
            <div className="bg-lightTan w-1/2 px-6">
              <div className="flex justify-between">
                <h2 className="font-medium text-xl">Adress</h2>
                <a>Edit</a>
                
              </div>
              <p>You can also add and edit delivery address here</p>
                <p>No home address saved</p>
            </div>
            <div className="bg-lightTan w-1/2 px-6">
              <div className="flex justify-between">
                <h2 className="font-medium text-xl">Newsletter Subscription</h2>
                <a>Edit</a>
              </div>
              <p>Newsletter subscription</p>
              <p>Direct mail marketing</p>
            </div>
          </div>
        </div>
    </Layout>
  );
};
