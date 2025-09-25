import Counter from "./Counter";
import styles from "./StudentCard.module.css";

interface StudentCardProps {
  name: string;
  age: number;
  grade: string;
}

export default function StudentCard({ name, age, grade }: StudentCardProps) {
  return (
    <div className={styles.studentCard}>
      <h2 className={styles.studentName}>{name}</h2>
      <p className={styles.studentInfo}>Age: {age}</p>
      <p className={styles.studentInfo}>Grade: {grade}</p>
      <Counter />
    </div>
  );
}
