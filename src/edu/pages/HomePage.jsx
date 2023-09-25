import { HomeLayout } from "../layout/HomeLayout";
// import { DashboardView } from "../views";
import { OrdersView } from "../views";

export const HomePage = () => {
  return (
    <>
      <HomeLayout>
        {/* <DashboardView /> */}
        <OrdersView />
      </HomeLayout>
    </>
  );
};
