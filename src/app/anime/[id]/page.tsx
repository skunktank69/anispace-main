import AnimeDetail from "@/components/anime-details";

export default async function AnimePage(context: {
  params: Promise<{ id: string }>;
}) {
  const id = (await context.params).id;
  console.log(`id`, id);
  return <AnimeDetail id={id} />;
}
