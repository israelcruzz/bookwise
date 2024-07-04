import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

export const formatDistanceDate = (data: Date) => {
  const dateFormated = formatDistanceToNow(new Date(data), {
    addSuffix: true,
    locale: ptBR,
  });

  return dateFormated;
};
