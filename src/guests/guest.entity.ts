import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
export type GuestDecision = 'NOT_DECIDED' | 'YES' | 'NO';
export type Gender = 'MALE' | 'FEMALE' | 'NON';
@Entity()
export class Guest {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  mobileNumber: string;
  @Column()
  family: boolean;
  @Column()
  gender: Gender;
  @Column({ default: 'NOT_DECIDED' })
  accepted: GuestDecision;
}
