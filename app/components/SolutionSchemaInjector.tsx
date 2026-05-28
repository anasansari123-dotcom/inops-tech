import SecondaryPageJsonLd from "@/app/components/SecondaryPageJsonLd";
import SoftwareApplicationJsonLd from "@/app/components/SoftwareApplicationJsonLd";
import { solutionSchemaByPath } from "@/app/lib/solutionSchema";

type Props = {
  path: string;
  pageTitle?: string;
  pageDescription?: string;
};

export default function SolutionSchemaInjector({ path, pageTitle, pageDescription }: Props) {
  const data = solutionSchemaByPath[path];
  const title = pageTitle ?? data?.name ?? path;
  const description = pageDescription ?? data?.description ?? "";

  return (
    <>
      <SecondaryPageJsonLd path={path} title={title} description={description} />
      {data ? (
        <SoftwareApplicationJsonLd
          name={data.name}
          description={data.description}
          path={path}
          pageTitle={title}
        />
      ) : null}
    </>
  );
}
