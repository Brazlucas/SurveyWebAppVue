<template v-if="showComponent">
    <div class="container">
        <v-row v-if="isLoading">
            <v-col cols="12" md="4">
                <v-skeleton-loader v-bind="attrs" type="card-avatar, article, actions"></v-skeleton-loader>
                <v-skeleton-loader v-bind="attrs" type="date-picker"></v-skeleton-loader>
            </v-col>
            <v-col cols="12" md="4">
                <v-skeleton-loader v-bind="attrs" type="article, actions"></v-skeleton-loader>
                <v-skeleton-loader v-bind="attrs"
                    type="table-heading, list-item-two-line, image, table-tfoot"></v-skeleton-loader>
            </v-col>
        </v-row>
        <div class="__content">
            <p>{{ company.name }} &copy; </p>
            <img v-bind:src="company.logo" alt="">
        </div>
        <div class="details_container_content">
            <div class="children" v-if="!isFinished">
                <h1>{{ atualStep.title }}</h1>
                <p class="__description">{{ atualStep.description }} </p>
                <img class="__icon" v-bind:src="atualStep.icon" alt="">
                <p>Página {{ atualStep.id }}</p>
                <v-btn color="success" elevation="2" @click="nextStep">Próximo Passo</v-btn>
            </div>
            <div class="__finished" v-if="isFinished">
                <h1>Parabéns, você finalizou a vistoria!</h1>
            </div>
            <div class="text-center" v-if="isFinished">
                <v-btn v-if="!isLoading" class="ma-2" outlined color="success" depressed @click="refreshPage">
                    NOVA VISTORIA
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import InspectionService from '../services/inspection.service'
import Company from '../models/company.entity'
import InspectionStep from '../models/inspection-step.entity';

@Component
export default class HelloWorld extends Vue {
    company: Company = new Company()
    atualIndex = 0;
    pageLength = 0;
    isFinished = false;
    isDark = false;
    isLoading = true;
    attrs = 0;

    public get atualStep(): InspectionStep {
        if (!this.company.steps.length) return new InspectionStep();
        return this.company.steps[this.atualIndex]
    }

    private created() {
        // verifica se o site está sendo acessado a partir de um celular
        this.getPlataform();
        // outros códigos que serão executados assim que o componente for criado
        this.getSteps();
        // verifica se o usuário pode acessar o site de acordo com a resolução da tela do mesmo
    }

    getPlataform() {
        if (navigator.userAgent.includes('Mobile') || navigator.userAgent.includes('Android')) {
            // permite que o usuário acesse o site
            console.log(navigator.userAgent)
        } else {
            // redireciona o usuário para a página de acesso somente por celular
            window.location.href = '/about';
        }
    }

    private getSteps() {
        InspectionService.getSteps().then((response) => {
            this.company = response.data
            this.pageLength = this.company.steps.length

        }).catch((err: any) => {
            if (err === 404) {
                console.log(err)
                window.location.href = '/404';
            }
        })
        .finally(() => { this.isLoading = false })
    }

    refreshPage(): any {
        window.location.reload()
    }

    nextStep() {
        // aumenta o índice do passo atual
        if (this.atualIndex >= (this.pageLength - 1)) {
            return this.isFinished = true
        }
        else if ((this.atualIndex + 1) <= this.pageLength) {
            this.atualIndex++;
        }
    }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$small: 300px;
$medium: 900px;

.container {
    display: table;
    align-items: center;
    justify-content: center;
    margin: 0px;

    @media screen and (max-width: $medium) {
        text-align: center;
        display: table;
        align-items: center;
        justify-content: center;
        margin: 0 auto;
        padding: 10px;
        p {
            text-align: justify;
        }
    }

    .text-center {
        margin-top: 50%
    }

    .__finished {
        h1 {
            color: rgb(0, 198, 23);
        }
    }

    .__content {
        @media screen and (max-width: $medium) {
            gap: 2px;
            display: table;
            justify-content: center;
            margin: 0 auto;

            p {
                text-align: center;
            }

            img {
                background-color: rgba(0, 255, 76, 0.381);
            }
        }
    }

    .details_container_content {
        @media screen and (max-width: $medium) {
            gap: 2px;
            padding: 15px;
            display: table;
            align-items: center;
            justify-content: center;
            margin: 5px;
            padding: 0px;
        }
    }

    .__icon {
        width: 50%;
        height: 50%;
        box-shadow: black 5px 5px 5px;

        @media screen and (max-width: $medium) {
            width: 100%;
            height: 100%;
            box-shadow: black 2px 2px 2px;
        }
    }

    img {
        @media screen and (max-width: $medium) {
            width: 90%;
            height: 50%;
        }
    }


}
</style>
