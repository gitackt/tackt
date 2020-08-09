import { Skill } from '../interfaces/Skill'
import { Service } from '../interfaces/Service'
import { Experience } from '../interfaces/Experience'
import { Writing } from '../interfaces/Writing'

export interface Content {
  title: string
  skills: Array<Skill>
  services: Array<Service>
  experiences: Array<Experience>
  writings: Array<Writing>
}
