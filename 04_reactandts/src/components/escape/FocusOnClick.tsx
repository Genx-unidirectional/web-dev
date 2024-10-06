import { forwardRef } from "react";

function FocusOnClick() {
  return <div>FocusOnClick</div>;
}
export default FocusOnClick;

function SearchButton({}) {
  return <button className="">Search</button>;
}

type Props = {};
const SearchInput = forwardRef<Props>(({}) => {
  return <input type="text" />;
});
