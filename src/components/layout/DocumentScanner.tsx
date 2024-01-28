import { FeaturePreview } from '../common/FeaturePreview';
import { FeatureDescription } from '../common/FeatureDescription';
import styles from './DocumentScanner.module.css';

const title = 'DOCUMENT SCANNER';
const subHeading = 'Scan with Ease';
const paragraph =
  'Scan any document instantly with your\
   mobile device by just a few steps.\
   Save as PDF,JPG,ZIP,TXT and Word format.';

export function DocumentScanner() {
  return (
    <div className={styles.document_scanner}>
      <FeaturePreview />
      <FeatureDescription
        title={title}
        subHeading={subHeading}
        paragraph={paragraph}
      />
    </div>
  );
}
