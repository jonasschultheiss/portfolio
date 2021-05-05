import Social from '@components/socials/social';

export default function Socials() {
  return (
    <div className="flex flex-row items-center justify-center md:justify-start mt-2">
      <Social href="https://github.com/jonasschultheiss" src="/GitHub.svg" alt="GitHub" />
      <Social href="https://www.linkedin.com/in/jonasschultheiss/" src="/linkedin.svg" alt="LinkedIn" />
      <Social href="https://twitter.com/SchultheissJ" src="/twitter.svg" alt="Twitter" />
      <Social href="https://www.hackerrank.com/quest1onmark" src="/Hackerrank.svg" alt="HackerRank" />
    </div>
  );
}
