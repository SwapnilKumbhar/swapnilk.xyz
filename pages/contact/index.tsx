import Navbar from '../../components/Navbar';
import OutLink from '../../components/OutLink';
import styles from '../../styles/common.module.css';
import { addClasses } from '../../api/styles';

export default function Contact() {
  return (
    <div>
      <Navbar
        minimal={false}
        title="Contact | Swapnil Kumbhar"
        description="Various ways to contact me."
      />
      <div className={addClasses(styles.gcontainer, 'lg:pt-4', 'md:pt-2')}>
        <div className="py-6 font-light text-md md:pt-4 md:text-md lg:text-lg">
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
            That&apos;s about it.
          </p>
        </div>
      </div>
    </div>
  );
}
