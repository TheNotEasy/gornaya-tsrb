import { prisma } from "@/src/crud/prisma";

export default async function RequestView() {
  const requests = (await prisma.paymentRequest.findMany()).map((value) => {
    return (
      <div className="flex flex-col">
        <p></p>
        <button></button>
      </div>
    );
  });
  return <div></div>;
}
