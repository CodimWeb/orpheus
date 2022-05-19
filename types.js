import PropTypes from 'prop-types';


// Не сортировать первую группу определений типов

/** Форматированный текст в формате Draft-js */
export const ZenContent = PropTypes.shape({
  blocks: PropTypes.arrayOf(PropTypes.object).isRequired,
  entityMap: PropTypes.object.isRequired,
});

/** Изображение */
export const Image = PropTypes.shape({
  id: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
  hash: PropTypes.string.isRequired,
  ext: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  title: PropTypes.string,
});

/** Род деятельности (персоны) */
export const Occupation = PropTypes.shape({
  id: PropTypes.number.isRequired,
  alias: PropTypes.string,
  title: PropTypes.string.isRequired,
});

/** Персона (в списках) */
export const PersonPreview = PropTypes.shape({
  id: PropTypes.number.isRequired,
  image: Image,
  title: PropTypes.string.isRequired,
  lifeYears: PropTypes.string,
  announce: PropTypes.string,
  occupations: PropTypes.arrayOf(Occupation),
});

/** Расписание передачи */
export const ProgramTimes = PropTypes.shape({
  id: PropTypes.number.isRequired,
  mon: PropTypes.bool,
  tue: PropTypes.bool,
  wed: PropTypes.bool,
  thu: PropTypes.bool,
  fri: PropTypes.bool,
  sat: PropTypes.bool,
  sun: PropTypes.bool,
  time: PropTypes.string.isRequired,
});

/** Роль (категория) члена команды */
export const TeamRole = PropTypes.shape({
  alias: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});

/** Член команды (в списках) */
export const TeamPreview = PropTypes.shape({
  id: PropTypes.number.isRequired,
  cover: Image,
  title: PropTypes.string.isRequired,
  anons: PropTypes.string,
  alias: PropTypes.string,
  role: TeamRole.isRequired,
});

/** Программа */
export const Program = PropTypes.shape({
  id: PropTypes.number.isRequired,
  image: Image,
  title: PropTypes.string.isRequired,
  description: ZenContent,
  times: PropTypes.arrayOf(ProgramTimes),
  hosts: PropTypes.arrayOf(TeamPreview),
  alias: PropTypes.string.isRequired,
  inArchive: PropTypes.bool.isRequired,
});

/** Программа (в списках) */
export const ProgramPreview = PropTypes.shape({
  id: PropTypes.number.isRequired,
  cover: Image,
  alias: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  anons: PropTypes.string,
  times: PropTypes.arrayOf(ProgramTimes),
  inArchive: PropTypes.bool.isRequired,
});

/** Тег */
export const Tag = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
});

/** Тип события */
export const NewsType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  alias: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
});



/** Рекламный блок */
export const Advert = PropTypes.shape({
  id: PropTypes.number.isRequired,
  banner: PropTypes.string,
  text: PropTypes.string,
  link: PropTypes.string,
});

/** Страна */
export const Country = PropTypes.shape({
  id: PropTypes.number.isRequired,
  alias: PropTypes.string,
  title: PropTypes.string.isRequired,
});

/** Выпуск */
export const Episode = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: ZenContent,
  program: ProgramPreview,
  broadcasts: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(Tag),
});

/** Выпуск (в списках) */
export const EpisodePreview = PropTypes.shape({
  id: PropTypes.number.isRequired,
  cover: Image,
  alias: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  anons: PropTypes.string,
  broadcasts: PropTypes.arrayOf(PropTypes.string).isRequired,
  program: PropTypes.shape({
    alias: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  tags: PropTypes.arrayOf(Tag),
});

/** Событие */
export const News = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  datetimePublish: PropTypes.string.isRequired,
  body: ZenContent.isRequired,
  tags: PropTypes.arrayOf(Tag),
  type: NewsType.isRequired,
  asidePerson: PersonPreview,
  asideProgram: ProgramPreview,
  asideEpisode: EpisodePreview,
});

/** Событие (в списках) */
export const NewsPreview = PropTypes.shape({
  id: PropTypes.number.isRequired,
  cover: Image,
  type: NewsType.isRequired,
  alias: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  anons: PropTypes.string,
  datetimePublish: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(Tag),
});

/** Персона */
export const Person = PropTypes.shape({
  id: PropTypes.number.isRequired,
  image: Image,
  title: PropTypes.string.isRequired,
  originTitle: PropTypes.string,
  lifeYears: PropTypes.string,
  biography: ZenContent,
  occupations: PropTypes.arrayOf(Occupation),
  countries: PropTypes.arrayOf(Country),
});

/** Промо блок */
export const Promo = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  anons: PropTypes.string,
  cover: Image,
  url: PropTypes.string,
  tags: PropTypes.arrayOf(Tag).isRequired,
});

/** Спецпроект */
export const SpecialPreview = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cover: Image,
  anons: PropTypes.string,
  link: PropTypes.string,
});

/** Член команды */
export const Team = PropTypes.shape({
  id: PropTypes.number.isRequired,
  photo: Image,
  title: PropTypes.string.isRequired,
  lead: PropTypes.string,
  description: ZenContent.isRequired,
  role: TeamRole.isRequired,
});


export default {
  Advert,
  Country,
  Episode,
  EpisodePreview,
  Image,
  News,
  NewsPreview,
  NewsType,
  Occupation,
  Person,
  PersonPreview,
  Program,
  ProgramPreview,
  ProgramTimes,
  Promo,
  SpecialPreview,
  Tag,
  Team,
  TeamPreview,
  TeamRole,
  ZenContent,
};
