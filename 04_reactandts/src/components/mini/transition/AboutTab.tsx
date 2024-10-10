function AboutTab() {
  return (
    <div className="flex flex-col justify-center items-start h-full w-full">
      <h2 className="font-medium text-xl">
        How to use useTransition hook so that the slow component does not block
        the remaining ui
      </h2>
      <p className="mt-2">
        We can wrap the function which cause slow component to be rendered and
        use the isPending boolean value which get set to the true value when
        data is completely processed ans component to ready to mount.
      </p>
    </div>
  );
}
export default AboutTab;
