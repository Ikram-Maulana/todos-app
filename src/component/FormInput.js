import { Button, Label, TextInput } from "flowbite-react";
import React, { memo, useState } from "react";
import FormMessage from "./FormMessage";

const FormInput = ({
  onSubmitForm,
  activity,
  setActivity,
  message,
  edit,
  onCancelEdit,
}) => {
  const [charLimit] = useState(12);
  const [charRemaining, setCharRemaining] = useState(12);

  const charLimiter = (value, max) => {
    if (value.length > max) {
      value = value.substr(0, max);
    }
    let remaining = max - value.length;

    return {
      value,
      remaining,
    };
  };

  const onActivityChangeHandler = (e) => {
    const { value, remaining } = charLimiter(e.target.value, charLimit);
    setActivity(value);
    setCharRemaining(remaining);
  };

  return (
    <div className="w-[300px] mx-auto mb-4 md:mb-6 md:w-[500px]">
      <form onSubmit={onSubmitForm} className="flex flex-col gap-4" netlify>
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
            onChange={onActivityChangeHandler}
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
