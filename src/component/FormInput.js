import { Button, Label, TextInput } from "flowbite-react";
import React, { memo } from "react";
import FormMessage from "./FormMessage";

const FormInput = ({
  onSubmitForm,
  activity,
  message,
  edit,
  charRemaining,
  onCancelEdit,
  onActivityChange,
}) => {
  return (
    <div className="w-[300px] mx-auto mb-4 md:mb-6 md:w-[500px]">
      <form onSubmit={onSubmitForm} className="flex flex-col gap-4">
        <div>
          <div className="mb-2 flex justify-between">
            <Label htmlFor="activity1" value="Nama Aktifitas" />
            <Label
              htmlFor="character"
              value={["Sisa Karakter: ", charRemaining]}
            />
          </div>
          <TextInput
            id="activity1"
            type="text"
            placeholder="Masukkan nama aktifitas anda..."
            value={activity}
            onChange={onActivityChange}
          />
          {message && <FormMessage>{message}</FormMessage>}
        </div>

        {edit.id ? (
          <div className="grid gap-2 grid-cols-2 grid-rows-1 [&>*]:w-full [&>*]:h-full">
            <Button type="submit">{edit.id ? "Perbarui" : "Tambah"}</Button>
            <Button gradientDuoTone="redToYellow" onClick={onCancelEdit}>
              Cancel Edit
            </Button>
          </div>
        ) : (
          <div className="[&>*]:w-full">
            <Button type="submit">Tambah</Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default memo(FormInput);
