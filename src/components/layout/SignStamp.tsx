import { FeaturePreview } from '../common/FeaturePreview';
import { FeatureDescription } from '../common/FeatureDescription';
import styles from './SignStamp.module.css';

const title = 'SIGN & STAMP';
const subHeading = 'One-Tap Focus';
const paragraph =
  'Draw, scan or import your signature and stamp with a simple\
  touch. Sign and stamp any document with just a single tap!';

export function SignStamp() {
  return (
    <div className={styles.sign_stamp}>
      <FeaturePreview />
      <FeatureDescription
        title={title}
        subHeading={subHeading}
        paragraph={paragraph}
      />
    </div>
  );
}
