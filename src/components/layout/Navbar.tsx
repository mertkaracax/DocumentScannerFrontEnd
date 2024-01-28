import { Button } from '../common/Button';
import styles from './Navbar.module.css';
import { PageTitles } from '../../constants';

export function Navbar() {
  return (
    <div className={styles.navbar}>
      <Button number={1} title={PageTitles.DocumentScanner} />
      <Button number={2} title={PageTitles.SignAndStamp} />
      <Button number={3} title={PageTitles.BatchScanning} />
      <Button number={4} title={PageTitles.AdvancedFilters} />
      <Button number={5} title={PageTitles.ExportAndShare} />
    </div>
  );
}
