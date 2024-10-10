import { Dispatch, SetStateAction } from "react";

function MusicBand({ navigateUrl }: { navigateUrl: (url: string) => void }) {
  return (
    <div className="flex justify-center items-center flex-col">
      <button onClick={() => navigateUrl("/musicpage")}>
        Go to music page
      </button>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto dolores
        ad aliquam esse, exercitationem cupiditate ipsam rem ullam porro. Nam
        iste fugiat ratione, distinctio et libero voluptatum dolorem veritatis
        at?
      </p>
    </div>
  );
}
export default MusicBand;
