import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <div>
            <h1 className="text-3xl font-bold">Button Variants</h1>

      {/* Sizes */}
      <div className="space-x-4">
        <Button title="Small" styles="text-sm px-3 py-1" />
        <Button title="Medium" styles="text-base px-4 py-2" />
        <Button title="Large" styles="text-lg px-6 py-3" />
      </div>

      {/* Shapes */}
      <div className="space-x-4">
        <Button title="Rounded SM" styles="rounded-sm" />
        <Button title="Rounded MD" styles="rounded-md" />
        <Button title="Rounded LG" styles="rounded-lg" />
        <Button title="Rounded Full" styles="rounded-full" />
      </div>
      </div>
    </div>
  )
}
export default Landing;