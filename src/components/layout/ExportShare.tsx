import { FeaturePreview } from '../common/FeaturePreview';
import { FeatureDescription } from '../common/FeatureDescription';
import styles from './ExportShare.module.css';

const title = 'EXPORT & SHARE';
const subHeading = 'All-Round Conversion';
const paragraph = 'Export your scans as PDF,JPG,ZIP,TXT and Word.';

export function ExportShare() {
  return (
    <div className={styles.export_share}>
      <FeaturePreview />
      <FeatureDescription
        title={title}
        subHeading={subHeading}
        paragraph={paragraph}
      />
    </div>
  );
}
