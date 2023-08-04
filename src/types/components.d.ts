// 核心代码 组件类型声明文件
// 1. 导入组件实例
import PrButton from '@/components/pr_button.vue';
import PrNarbar from '@/components/pr_narbar.vue';
import PrMenu from '@/components/pr_menu.vue';
import PrContactDialog from '@/components/pr_contactDialog.vue';
import PrCatalog from '@/components/pr_catalog.vue';
import PrLittleMenu from '@/components/pr_littleMenu.vue';
import PrPagination from '@/components/pr_pagination.vue';
import PrHeaderImg from '@/components/pr_headerImg.vue';
// 2. 声明 vue 类型模块
declare module 'vue' {
    // 3. 给 vue  添加全局组件类型，interface 和之前的合并
    interface GlobalComponents {
        // 4. 定义具体组件类型，typeof 获取到组件实例类型
        // typeof 作用是得到对应的TS类型
        PrButton: typeof PrButton;
        PrNarbar: typeof PrNarbar;
        PrMenu: typeof PrMenu;
        PrContactDialog: typeof PrContactDialog;
        PrCatalog: typeof PrCatalog;
        PrLittleMenu: typeof PrLittleMenu;
        PrPagination : typeof PrPagination;
        PrHeaderImg: typeof PrHeaderImg;
    }
}