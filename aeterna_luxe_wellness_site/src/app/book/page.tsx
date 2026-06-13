import { meta } from "@/lib/seo";
import { BookPageContent } from "@/components/BookPageContent";

export const metadata = meta({
  title: "Book",
  description: "Book wellness shots, IV therapy, and schedule medical consultations at Aeterna Luxe Wellness & Beauty in Hollywood, Florida. Two booking paths — direct and consultation-first.",
  path: "/book"
});

export default function BookPage() {
  return <BookPageContent />;
}
