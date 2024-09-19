import Link from "next/link";

export default function Show() {
  return (
    <div>
      <h1>Show page</h1>
      <Link href="/">Main</Link>
      <br />
      <Link href="/client/1234">Client 1234</Link>
    </div>
  );
}
