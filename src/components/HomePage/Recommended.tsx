import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const Recommended = () => {
  return (
    <div>
      <ScrollArea>
        <div className="flex w-max space-x-4 p-4">
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
          <div className="size-36 bg-blue-600">card</div>
        </div>
        <ScrollBar orientation="horizontal" className="hidden" />
      </ScrollArea>
    </div>
  );
};
export default Recommended;
