export default function WalletInfoContainer() {
  return (
    <div className="h-full col-span-3 grid grid-rows-3 grid-cols-2 gap-7">
      <div className="bg-card rounded-2xl">Balance</div>
      <div className="bg-card rounded-2xl">Graph</div>
      <div className="bg-card rounded-2xl col-span-2 row-span-2">Transactions</div>
    </div>
  );
}
