import AnalyticsPageComponent from "./components/AnalyticsPageComponent";
import axios from "axios";
import socketIOClient from "socket.io-client";
const fetchOrdersForFirstDate = async (firstDateToCompare) => {
  const { data } = await axios.get(
    "/api/orders/analysis/" + firstDateToCompare
  );
  return data;
};

const fetchOrdersForSecondDate = async (secondDateToCompare) => {
  const { data } = await axios.get(
    "/api/orders/analysis/" + secondDateToCompare
  );
  return data;
};

const AdminAnalyticsPage = () => {
  return (
    <AnalyticsPageComponent
      fetchOrdersForFirstDate={fetchOrdersForFirstDate}
      fetchOrdersForSecondDate={fetchOrdersForSecondDate}
      socketIOClient={socketIOClient}
    />
  );
};

export default AdminAnalyticsPage;
