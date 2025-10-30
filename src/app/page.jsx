import SuspenseServerComponent from "@/components/(Suspense)/SuspenseServerComponent";
import ServerComponent from "@/components/servervsclient/ServerComponent";
import { SERVER_PROPS_GET_INIT_PROPS_CONFLICT } from "next/dist/lib/constants";
import Link from "next/link";

const Iwatch = () => {
  return (
    <>
      <h1>
        <Link href="/iwatch">Iwatch siden...</Link>
      </h1>
      {/* <SuspenseServerComponent /> */}
      <ServerComponent />
    </>
  );
};

export default Iwatch;
