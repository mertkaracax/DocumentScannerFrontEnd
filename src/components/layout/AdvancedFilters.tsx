import { FeaturePreview } from '../common/FeaturePreview';
import { FeatureDescription } from '../common/FeatureDescription';
import styles from './AdvancedFilters.module.css';

const title = 'ADVANCED FILTERS';
const subHeading = 'Unique Filters';
const paragraph =
  'Apply advanced filters and enhance quality with various custom\
   made filters. Manually edit brightness and contrast by your own\
   choice on the custom filters.';

export function AdvancedFilters() {
  return (
    <div className={styles.advanced_filters}>
      <FeaturePreview />
      <FeatureDescription
        title={title}
        subHeading={subHeading}
        paragraph={paragraph}
      />
    </div>
  );
}
