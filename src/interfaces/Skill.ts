enum Grade {
  VeryGood = 'VeryGood',
  Good = 'Good',
  Normal = 'Normal',
}

export interface Skill {
  name: string
  grade: Grade
}
