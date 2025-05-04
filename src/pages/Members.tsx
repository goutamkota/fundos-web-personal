import { InvestorsTable } from "@/components/custom/InvestorsTable";
import { DialogTrigger, Dialog } from "@/components/ui/dialog";

export default function Members() {
  return (
    <Dialog>
      <header className="flex justify-between items-center">
        <div>
          <h2 className="text-4xl">Members</h2>
        </div>
        <DialogTrigger asChild>
          <button className="bg-white text-black px-4 py-2 rounded-none">
            Add member
          </button>
        </DialogTrigger>
      </header>
      <div className="mb-8">
        <small className="text-gray-500">
          Track whom you are onboarding
        </small>
      </div>
      <InvestorsTable />
    </Dialog>
  );
}
