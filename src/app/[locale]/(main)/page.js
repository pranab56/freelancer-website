import { useTranslations } from "next-intl";
import Homelayout from "@/components/home/Homelayout";
import { locales } from "@/i18n/routing";

export default function HomePage() {
  return <Homelayout />;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
