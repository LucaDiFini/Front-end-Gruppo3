import type { Schema, Attribute } from '@strapi/strapi';

export interface CardPerksList extends Schema.Component {
  collectionName: 'components_list_perks_lists';
  info: {
    displayName: 'Perk';
    description: '';
  };
  attributes: {
    Description: Attribute.String;
    Icon: Attribute.Media;
    Layout: Attribute.Enumeration<['Left', 'Center', 'Right']>;
  };
}

export interface CardTextAndImage extends Schema.Component {
  collectionName: 'components_card_text_and_images';
  info: {
    displayName: 'TextAndImage';
    icon: 'cup';
  };
  attributes: {
    Title: Attribute.String;
    Text: Attribute.RichText;
    Image: Attribute.Media;
  };
}

export interface HeroHeroCard extends Schema.Component {
  collectionName: 'components_hero_hero_cards';
  info: {
    displayName: 'HeroCard';
  };
  attributes: {
    Meals: Attribute.Relation<'hero.hero-card', 'oneToMany', 'api::meal.meal'>;
  };
}

export interface HeroHeroTitle extends Schema.Component {
  collectionName: 'components_hero_hero_titles';
  info: {
    displayName: 'HeroTitle';
    description: '';
  };
  attributes: {
    Title: Attribute.Component<'layout.title-text-with-color', true>;
    Text: Attribute.RichText;
    LinkText: Attribute.String;
    LinkUrl: Attribute.String;
    LinkBackgroundColors: Attribute.Relation<
      'hero.hero-title',
      'oneToMany',
      'api::color.color'
    >;
    LinkTextColor: Attribute.Relation<
      'hero.hero-title',
      'oneToOne',
      'api::color.color'
    >;
    Layout: Attribute.Enumeration<['Left', 'Center', 'Right']>;
  };
}

export interface HeroSimpleTitle extends Schema.Component {
  collectionName: 'components_hero_simple_titles';
  info: {
    displayName: 'SimpleTitle';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    Layout: Attribute.Enumeration<['Left', 'Center', 'Right']>;
  };
}

export interface LayoutMenuItem extends Schema.Component {
  collectionName: 'components_layout_menu_items';
  info: {
    displayName: 'MenuItem';
  };
  attributes: {
    Linktext: Attribute.String;
    LinkUrl: Attribute.String;
  };
}

export interface LayoutTitleTextWithColor extends Schema.Component {
  collectionName: 'components_layout_title_text_with_colors';
  info: {
    displayName: 'TitleTextWithColor';
    description: '';
  };
  attributes: {
    Text: Attribute.String;
    Colors: Attribute.Relation<
      'layout.title-text-with-color',
      'oneToMany',
      'api::color.color'
    >;
  };
}

export interface ListAssemblyPhase extends Schema.Component {
  collectionName: 'components_list_assembly_phases';
  info: {
    displayName: 'AssemblyPhase';
    description: '';
  };
  attributes: {
    Order: Attribute.Integer;
    Title: Attribute.String;
    Text: Attribute.RichText;
  };
}

export interface ListMealsList extends Schema.Component {
  collectionName: 'components_list_meals_lists';
  info: {
    displayName: 'MealsList';
    description: '';
  };
  attributes: {
    Meals: Attribute.Relation<'list.meals-list', 'oneToMany', 'api::meal.meal'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'card.perks-list': CardPerksList;
      'card.text-and-image': CardTextAndImage;
      'hero.hero-card': HeroHeroCard;
      'hero.hero-title': HeroHeroTitle;
      'hero.simple-title': HeroSimpleTitle;
      'layout.menu-item': LayoutMenuItem;
      'layout.title-text-with-color': LayoutTitleTextWithColor;
      'list.assembly-phase': ListAssemblyPhase;
      'list.meals-list': ListMealsList;
    }
  }
}
