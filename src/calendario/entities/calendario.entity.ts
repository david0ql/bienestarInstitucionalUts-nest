import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Calendario {

  @PrimaryGeneratedColumn()
  idCita: number;

  @Column()
  idFranja: number;

  @Column()
  fecha: string;

  @Column()
  correoPaciente: string;

  @Column()
  correoProfesional: string;

  @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
  fechaRegistro: Date;

}
