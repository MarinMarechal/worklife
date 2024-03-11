<template>
    <div id="item">
        <Button @click.native="$router.go(-1)">Back</Button>
        <div class="item_content">
            <img class="item_content_image" src="@/assets/images/image.png" alt="">
            <div class="item_content_infos">
                <h2>title</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus architecto nisi obcaecati, beatae laboriosam odit, distinctio commodi aliquid numquam, sint sequi quae! Accusamus ipsum amet molestiae. Alias, obcaecati labore.</p>
                <strong>Category</strong>
                <ul>
                    <li>
                        <Button>Tag 1</Button>
                    </li>
                    <li>
                        <Button>Tag 2</Button>
                    </li>
                    <li>
                        <Button>Tag 3</Button>
                    </li>
                    <li>
                        <Button>Tag 4</Button>
                    </li>
                </ul>
            </div>
            <Button :color="'secondary'">Add to favorites</Button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {

    },
}
</script>

<style lang="scss" scoped>
#item {
    .item_content {
        margin-top: 4rem;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        grid-template-areas: "image infos" "image button";
        @media(max-width: 767px) {
            grid-template-areas: "image image" "infos infos";
        }
        &_image {
            grid-area: image;
            width: 100%;
            height: auto;
        }
        &_infos {
            grid-area: infos;
            h2 {
                font-size: 3rem;
                font-weight: 700;
                text-transform: uppercase;
                margin-bottom: 2rem;
            }
            p {
                font-size: 1.4rem;
                line-height: 1.3;
                margin-bottom: 2rem;
            }
            strong {
                font-size: 1.4rem;
                font-weight: 700;
            }
            ul {
                margin: 1rem 0;
                display: flex;
                gap: 1rem;
            }
        }
        >.custom_button {
            grid-area: button;
            margin-top: auto;
            @media(max-width: 1024px) {
                position: absolute;
                bottom: 3rem;
                left: 3rem;
                width: calc(100% - 6rem);
            }
        }
    }
}
</style>