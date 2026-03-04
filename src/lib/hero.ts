import { heroConfig } from '@/config/Hero';

export const parseTemplate = (
  template: string,
  skills: typeof heroConfig.skills,
  links?: { text: string; href: string; image?: string }[]
) => {
  const parts = template.split(/(\{skills:\d+\}|\{link:\d+\})/);

  return parts
    .map((part, index) => {
      const skillMatch = part.match(/\{skills:(\d+)\}/);
      if (skillMatch) {
        const skillIndex = parseInt(skillMatch[1]);
        const skill = skills[skillIndex];
        if (skill) {
          return {
            type: 'skill',
            skill: skill,
            key: index,
          };
        }
      }

      const linkMatch = part.match(/\{link:(\d+)\}/);
      if (linkMatch && links) {
        const linkIndex = parseInt(linkMatch[1]);
        const link = links[linkIndex];
        if (link) {
          return {
            type: 'link',
            link: link,
            key: index,
          };
        }
      }

      const boldParts = part.split(/(\*\*.*?\*\*)/);
      return boldParts.map((boldPart, boldIndex) => {
        if (boldPart.startsWith('**') && boldPart.endsWith('**')) {
          return {
            type: 'bold',
            text: boldPart.slice(2, -2),
            key: `${index}-${boldIndex}`,
          };
        }
        return {
          type: 'text',
          text: boldPart,
          key: `${index}-${boldIndex}`,
        };
      });
    })
    .flat();
};

export const parseBoldText = (text: string) => {
  const parts = text.split(/(\*\*.*?\*\*)/);
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return {
        text: part.slice(2, -2),
        bold: true,
        key: index,
      };
    }
    return {
      text: part,
      bold: false,
      key: index,
    };
  });
};
