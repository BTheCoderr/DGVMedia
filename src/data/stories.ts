export interface Story {
  id: string;
  title: string;
  slug: string;
  category: 'Community' | 'Politics' | 'Culture' | 'Education';
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

export const stories: Story[] = [
  {
    id: '1',
    title: "The Voice of the Streets: Local Artists Reshaping Providence's Culture",
    slug: "voice-of-streets-local-artists",
    category: "Culture",
    date: "March 15, 2024",
    excerpt: "Exploring how local artists are using their platforms to address community issues and create positive change.",
    content: `Providence's art scene is undergoing a transformation, led by a new generation of artists who refuse to be silent about the issues affecting their communities.

From muralists addressing gentrification to musicians documenting neighborhood stories, these artists are doing more than creating art – they're creating change.

"Art has always been a voice for the voiceless," says local artist Marcus Rivera. "We're just making sure that voice is heard loud and clear."

The movement has caught the attention of city officials and community leaders, leading to new initiatives supporting local artists and their work.`,
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3",
    author: {
      name: "Jamal Thompson",
      role: "Culture Reporter",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1"
    }
  },
  {
    id: '2',
    title: "City Council's Latest Move: What It Means for Our Neighborhoods",
    slug: "city-council-neighborhood-impact",
    category: "Politics",
    date: "March 14, 2024",
    excerpt: "Breaking down the recent city council decisions and their direct impact on local communities.",
    content: `In a landmark vote yesterday, the Providence City Council passed a series of measures aimed at addressing community concerns about development and affordable housing.

The new regulations require developers to allocate 25% of new residential projects to affordable housing units, a significant increase from the previous 10% requirement.

Community organizer Lisa Chen calls it "a step in the right direction" but notes that "there's still work to be done to ensure these policies truly serve our most vulnerable residents."

The measures will take effect in 60 days, with several community oversight committees being formed to monitor implementation.`,
    image: "https://images.unsplash.com/photo-1577495508048-b635879837f1?ixlib=rb-4.0.3",
    author: {
      name: "Marcus Johnson",
      role: "Political Correspondent",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1"
    }
  },
  {
    id: '3',
    title: "Youth Leaders Rising: The Next Generation Takes Charge",
    slug: "youth-leaders-rising",
    category: "Education",
    date: "March 13, 2024",
    excerpt: "How Providence's youth are creating innovative solutions to community challenges.",
    content: `At just 17, Sarah Martinez is already making waves in her community. As the founder of Youth Voice Providence, she's leading a movement of young people determined to have a say in their city's future.

"We're tired of decisions being made about us, without us," Martinez explains. "Young people have solutions – we just need to be heard."

The organization has already secured several wins, including the establishment of a youth advisory board to the city council and the implementation of environmental initiatives in local schools.

Their latest project? A city-wide campaign to increase youth participation in local government and community planning.`,
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3",
    author: {
      name: "Aisha Williams",
      role: "Education Reporter",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1"
    }
  }
]; 