"use client";
import { useState, useTransition } from "react";
import Presentation from "./Presentation";
import MusicBand from "./MusicBand";
import MusicPage from "./MusicPage";

function RouterComponent() {
  return (
    <div>
      <Router />
    </div>
  );
}
export default RouterComponent;

function Router() {
  const [isPending, startTransition] = useTransition();
  const [url, setUrl] = useState("/");
  function navigate(newUrl: string) {
    startTransition(() => {
      setUrl(newUrl);
    });
  }
  let content = <MusicBand key={"musicband"} navigateUrl={navigate} />;
  if (url === "/") {
    content = <MusicBand key={"musicband"} navigateUrl={navigate} />;
  } else if (url === "/musicpage") {
    content = <MusicPage key={"musicpage"} />;
  }
  return <Presentation isPending={isPending}>{content}</Presentation>;
}
