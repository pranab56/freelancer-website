import Homelayout from "@/components/home/Homelayout";
import CommonLayoutClient from "@/components/layouts/CommonLayoutClient";

export default function RootPage() {
  return (
    <CommonLayoutClient>
      <Homelayout />
    </CommonLayoutClient>
  );
}
