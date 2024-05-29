import React from 'react';
import { Select } from '@mantine/core';

export default function Dashboard() {
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
    <div>
      <Select
        label='Select a University'
        placeholder='Pick one'
        data={universities}
        searchable
        nothingFoundMessage='No options'
      />
    </div>
  );
}
