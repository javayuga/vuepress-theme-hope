import { Component, Vue } from "vue-property-decorator";
import AuthorIcon from "./icons/AuthorIcon.vue";
import { commentOptions, pageInfoI18n } from "./define";
import { CommentOptions } from "../types";

@Component({ components: { AuthorIcon } })
export default class AuthorInfo extends Vue {
  private commentOption: CommentOptions = commentOptions;

  private get author(): string {
    const { author } = this.$frontmatter;

    return author || (author === false ? "" : this.commentOption.author || "");
  }

  private get hint(): string {
    return pageInfoI18n[this.$localePath || "/"].author;
  }
}
