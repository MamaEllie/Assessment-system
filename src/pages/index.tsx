import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
import { Select } from '@mantine/core';

export default function Home() {
  const universities = [
    'University of Dar es Salaam (UDSM)',
    'Sokoine University of Agriculture (SUA)',
    'Ardhi University (ARU)',
    'University of Dodoma (UDOM)',
    'Tumaini University Makumira',
    'Mzumbe University',
    'Nelson Mandela African Institute of Science and Technology (NM-AIST)',
    'Muhimbili University of Health and Allied Sciences (MUHAS)',
    'Ruaha Catholic University (RUCU)',
    'St. Augustine University of Tanzania (SAUT)',
    'Zanzibar University (ZU)',
    'University of Iringa',
    'Teofilo Kisanji University (TEKU)',
    'Tengeru Institute of Community Development (TICD)',
    'Hubert Kairuki Memorial University (HKMU)',
    'Jordan University College',
    'College of Business Education (CBE)',
    'Kampala International University in Tanzania (KIUT)',
    'Mwalimu Nyerere Memorial Academy (MNMA)',
    'Moshi Co-operative University (MoCU)',
  ];
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 bg-defaultBg ${inter.className}`}
    >
      <Select
        label='Select a University'
        placeholder='Pick one'
        data={universities}
        searchable
        nothingFoundMessage='No options'
      />
    </main>
  );
}
