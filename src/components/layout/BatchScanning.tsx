import { FeaturePreview } from '../common/FeaturePreview';
import { FeatureDescription } from '../common/FeatureDescription';
import styles from './BatchScanning.module.css';

const title = 'BATCH SCANNING';
const subHeading = 'Multiple Page Scan';
const paragraph =
  'Scan multiple pages or documents in multiple-scanning mode.\
  Batch all scans as a single document.';

export function BatchScanning() {
  return (
    <div className={styles.batch_scanning}>
      <FeaturePreview />
      <FeatureDescription
        title={title}
        subHeading={subHeading}
        paragraph={paragraph}
      />
    </div>
  );
}
