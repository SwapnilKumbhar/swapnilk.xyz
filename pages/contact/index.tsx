import Navbar from '../../components/Navbar';
import OutLink from '../../components/OutLink';

export default function Contact() {
  return (
    <div>
      <Navbar
        minimal={false}
        title="Contact | Swapnil Kumbhar"
        description="Various ways to contact me."
      />
      <div className="container px-64 pt-10 mx-auto text-lg font-light">
        <p>
          You can reach me via Email at &lt;me [at] swapnilk [.] xyz &gt;.
        </p>
        <p>
          Here&apos;s my
          {' '}
          <OutLink link="https://github.com/SwapnilKumbhar" data="Github" />
          {' '}
          and
          {' '}
          <OutLink link="https://www.linkedin.com/in/swapnilk05" data="LinkedIn" />
          .
          <br />
          That's about it.
        </p>
      </div>
    </div>
  );
}
