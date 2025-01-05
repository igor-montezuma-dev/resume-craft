import { InputField } from "@/components/ui/input/field";
import { SwitchField } from "@/components/ui/switch/field";
import { UserRound } from "lucide-react";
import { SectionTitle } from "../section-title";

export const BasicInfoSection = () => {
  return (
    <div>
      <SectionTitle icon={UserRound} title="Informações Básicas" />
      <div className="w-full mt-4 grid grid-cols-2 gap-4">
        <div className="col-span-full w-full flex gap-3 items-end">
          <InputField
            label="Foto"
            placeholder="https://..."
            name="content.image.url"
            containerClassName="flex-1"
          />
          <SwitchField name="content.image.visible" className="mb-2" />
        </div>
        <InputField
          label="Nome completo"
          name="content.infos.fullName"
          placeholder="Informe seu nome completo"
          containerClassName="flex-1"
        />
        <InputField
          label="Cabeçalho"
          name="content.infos.headline"
          placeholder="Informe o seu cabeçalho"
        />
        <InputField
          label="E-mail"
          name="content.infos.email"
          placeholder="Informe seu email"
        />
        <InputField
          label="Site"
          name="content.infos.website"
          placeholder="Informe seu website"
        />
        <InputField
          label="Telefone"
          name="content.infos.phone"
          placeholder="(00) 00000-0000"
        />
        <InputField
          label="Localização"
          name="content.info.location"
          placeholder="Informe sua localização"
        />
      </div>
    </div>
  );
};
