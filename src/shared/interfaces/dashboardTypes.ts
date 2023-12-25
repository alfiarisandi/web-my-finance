import { UUID } from 'crypto';

export type TypeTabungan = {
  nama_tabungan?: string;
  icon?: string;
};

type TypeAnggaran = {
  nama_anggaran?: string;
  icon?: string;
};

export type Savings = {
  uuid?: UUID;
  nilai_tabungan?: number;
  total_outcome?: number;
  TypeTabungan?: TypeTabungan;
};

export type BugetPlan = {
  uuid?: UUID;
  nama_anggaran?: string;
  nilai_anggaran?: number;
  total_pengeluaran?: number;
  percentage?: number;
  percentage_outcome?: number;
  TypeAnggaran?: TypeAnggaran;
};

export type Transaksi = {
  uuid?: UUID;
  user_id?: UUID;
  outcome_id?: UUID;
  income_id?: UUID;
  type_transaksi?: string;
  nama_transaksi?: string;
  detail_transaksi?: string;
  nilai_transaksi?: number;
  timestamp?: Date;
};

export interface IDashboard {
  actual_balance: number;
  savings: Savings[] | [];
  buget_plan: BugetPlan[] | [];
  transaksi: Transaksi[] | [];
}
