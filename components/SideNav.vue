<template>
    <div class="sidenav">
        <ul>
            <li>List Item 1</li>
            <li>List Item 1</li>
            <li>List Item 1</li>
            <li>List Item 1</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Sidenav'
}
</script>

<style>
    .sidenav {
        width: 90%;
        height: 400px;
        margin: 0 auto;
        background: #FAFAFA;
        overflow-x: hidden;
        padding: 1rem;
        border-radius: 0.5rem;
    }
    
    @media (min-width: 320px) and (max-width: 768px) {
        .sidenav {
            display: none;
        }
    }
</style>